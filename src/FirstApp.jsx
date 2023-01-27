const newMessage = {
    title:"Hello dude!",
    name:"Diego"
}

const getNameFromDB = () => {
    return "Name"
}

const FirstApp = () => {
    return (
        <>
            <h1>Hello world</h1>
            {/*<code>{JSON.stringify(newMessage)}</code>*/}
            {getNameFromDB()}
            <p>Soy un parrafo</p>
        </>
    );
}

export default FirstApp;