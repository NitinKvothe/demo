const quoteApi = "https://quotes.rest/qod" 

const options = {
    method:"GET",
    headers: {
        "Accept": "application/json"
    }
    // body: JSON.stringify({
    //     query:``
    // })
}

export const quoteOfDay = () => (
    fetch(quoteApi, options).then( response => 
        response.json()).then(json => 
            {
                console.log(json)
                return json;
            })
    )


// export async function getRandomPoem(params) {
//     try {
//         let result = await fetch(quoteApi, options)
//         let response = await result.json()
//         let quote = response.data.
//         return poem.text    
//     } catch (error) {
//         console.log("Error in getRandomPoem", error)
//         throw error
//     }
    
// }