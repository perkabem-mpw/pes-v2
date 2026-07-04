async function loadDashboard(){

    const result = await api(

        "dashboard",

        "summary",

        {

            eventId:CONFIG.EVENT_ID

        }

    );

    console.log(result);

}
