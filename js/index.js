async function appInit() {
    const res = await fetch('https://661a1015125e9bb9f29b4159.mockapi.io/api/v1/albums')
    const payload = await res.json()
    console.log(payload)
}

appInit()