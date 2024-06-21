document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    const diet = document.getElementById('diet-filter').value;
    fetchRecipes(query, diet);
});

function fetchRecipes(query, diet) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${apiKey}`;
    
    if (diet) {
        url += `&diet=${diet}`;
    }
    
    fetch(url)
        .then(response => response.json())
        .then(data => displayRecipes(data.results))
        .catch(error => console.log(error));
}

function displayRecipes(recipes) {
    const recipesContainer = document.getElementById('recipes');
    recipesContainer.innerHTML = '';
    
    recipes.forEach(recipe => {
        const recipeElement = document.createElement('div');
        recipeElement.classList.add('recipe');
        
        recipeElement.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
        `;
        
        recipeElement.addEventListener('click', function() {
            showRecipeDetails(recipe.id);
        });
        
        recipesContainer.appendChild(recipeElement);
    });
}

function showRecipeDetails(id) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your API key
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const recipeDetails = document.getElementById('recipe-details');
            recipeDetails.innerHTML = `
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <h2>${data.title}</h2>
                    <img src="${data.image}" alt="${data.title}">
                    <p>${data.instructions}</p>
                </div>
            `;
            recipeDetails.style.display = 'block';
            
            document.querySelector('.close').addEventListener('click', function() {
                recipeDetails.style.display = 'none';
            });
        })
        .catch(error => console.log(error));
}
