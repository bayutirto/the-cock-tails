function main() {

    const baseUrl = "https://www.thecocktaildb.com";

    const getDataAlcohol = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/json/v1/1/filter.php?a=Alcoholic`);
            const responseJson = await response.json();
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllDataAlcohol(responseJson.drinks);
            }
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const getDataNonAlcohol = async () => {
        try {
            const response = await fetch(`${baseUrl}/api/json/v1/1/filter.php?a=Non_Alcoholic`);
            const responseJson = await response.json();
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllDataNonAlcohol(responseJson.drinks);
            }
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const renderAllDataAlcohol = (drinks) => {
        const listDataAlcoholElement = document.querySelector("#listDataAlcohol");
        listDataAlcoholElement.innerHTML = "";

        drinks.forEach(drink => {
            listDataAlcoholElement.innerHTML += `
            <div class="col s6 m3">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${drink.strDrinkThumb}">
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4"> Name : <br>${drink.strDrink}<i class="material-icons right">close</i></span>
                    </div>
                </div>
            </div>
                `;
        });

    };

    const renderAllDataNonAlcohol = (drinks) => {
        const listDataNonAlcoholElement = document.querySelector("#listDataNonAlcohol");
        listDataNonAlcoholElement.innerHTML = "";

        drinks.forEach(drink => {
            listDataNonAlcoholElement.innerHTML += `
            <div class="col s6 m3">
                <div class="card">
                    <div class="card-image waves-effect waves-block waves-light">
                        <img class="activator" src="${drink.strDrinkThumb}">
                    </div>
                    <div class="card-reveal">
                        <span class="card-title grey-text text-darken-4"> Name : <br>${drink.strDrink}<i class="material-icons right">close</i></span>
                    </div>
                </div>
            </div>
                `;
        });

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getDataAlcohol();
        getDataNonAlcohol();
    });
}

export default main;