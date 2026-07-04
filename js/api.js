async function api(module, action, data = {}) {

    const response = await fetch(CONFIG.API_URL, {

        method: "POST",

        headers: {

            "Content-Type":"application/json"

        },

        body: JSON.stringify({

            module,

            action,

            ...data

        })

    });

    return await response.json();

}
