export const sortAsc = (images) => {
    const sortedList = images.map((obj) => {
        return { ...obj, published_at: obj.published_at}
    })
    return [...sortedList].sort((objA, objB) => new Date(objA.published_at) - new Date(objB.published_at))

}

export const sortDesc = (images) => {
    const sortedList = images.map((obj) => {
        return { ...obj, published_at: obj.published_at}
    })
    return [...sortedList].sort((objA, objB) => new Date(objB.published_at) - new Date(objA.published_at))

}
