import api
 from "./api";
export async function getBreeds() {
    return await api.get('breeds', []).then(function (response) {
        return response.data
    }).catch(function (error) {
        alert('Error Getting order status - ' + error)
        return [];
    })
}