<template>
    <main role="main" class="container">
        <h1 class="mt-5">Laravel Echo Web Sample</h1>
        <br />
        <p>
            Please enter a message that will be sent to the clients (this web
            application and android application) via Laravel Echo.
        </p>
        <form id="newMessageForm" @submit="increment">
            <div class="form-group">
                <label for="messageInput">Message</label>
                <input
                    type="text"
                    class="form-control"
                    id="messageInput"
                    placeholder="Enter some message"
                />
            </div>
            <button id="submitButton" type="submit" class="btn btn-primary">
                Submit
            </button>
            <br /><br />
            <div class="form-group">
                <label for="messagesList">Received messages:</label>
                <ul id="messagesList" class="list-group"></ul>
            </div>
        </form>
    </main>
</template>

<script>
export default {
    data() {
        return {
            names: [],
        };
    },
    mounted() {
        let that = this;
        Echo.channel("user-channel").listen(".UserEvent", (data) => {
            that.names.push(data.title);
            console.log(data);
        });
    },
    methods: {
        increment(event) {
            event.preventDefault();
            fetch("/api/messages");
        },
    },
};
</script>
