export default function reload(arr, component, place) {
    place.innerHTML = ""
    for (const item of arr) {
        place.append(component(item));
    }
}