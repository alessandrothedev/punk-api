# PUNK API

![js-calculator](https://raw.githubusercontent.com/alessandrothedev/punk-api/main/Screenshot%202021-11-09%20at%2016.24.55.png)

## The Project :large_blue_diamond:
A React JS app where users can browse the entire BrewDog beers catalogue.
[Check out the Live Demo Here](https://alessandrothedev.github.io/punk-api/)

The app was created by fetching Brewdog's Punk API and storing the object returned in a State. Users are able to search their favourite beers by name and/or filter the results by volume of alcohol, bitterness or acidity level.

```
const [beersArray, setBeersArray] = useState([])

useEffect(() => {
        fetch('https://api.punkapi.com/v2/beers?per_page=80')
        .then(response => {return response.json()})
        .then(jsonObject => {
            const beersObj = jsonObject;
            setBeersArray(beersObj)
        })
    }, [])
```
