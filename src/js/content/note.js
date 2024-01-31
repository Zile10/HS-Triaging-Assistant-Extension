let ticketData;

function clearTicketData() {
    ticketData = {
        url: location.href,
        issue: '',
        storeId: '',
        workflow: '',
        playbook: '',
        reply: '',
    }
}


function returnDataValue(string) {
    let startIndicies = []
    let endIndicies = []

    for (let i = 0; i < string.length; i ++) {
        if (string.slice(i, i + 5) == ':</b>') {
            startIndicies.push(i + 6)
            let tempIndex = i + string.slice(i, string.length - 1).indexOf('<br>')
            endIndicies.push(tempIndex)
        };
    }
    return {
        start: startIndicies,
        end: endIndicies
    }

}

function findTicketData(name) {
    // Grab the user's message'
    let msgBody = document.querySelectorAll('section.message > section.messageBody'); // Grabbing all the 'message body' Sections
    let msgContent = msgBody[msgBody.length - 1].innerHTML; // Taking the last 'message body' on the ticket and grabbing its contents
    let rawData = msgContent.slice(msgContent.indexOf('Reported at'), msgContent.length - 1); // Narrowing down the message content to just the data at the bottom

    // Setting Indicies
    let indArr = returnDataValue(rawData)
    let data = {
        reported: 0,
        by: 1,
        device: 2,
        version: 3,
        location: 4,
        customer: 5,
        orderGroup: 6,
        workflow: 7,
        workflowType: 8,
        store: 9,
        deadline: 10,
        timezone: 11,
    }

    return rawData.slice(indArr.start[data[name]], indArr.end[data[name]] )
}

function findPlaybooks() {
    let title = document.querySelector('#subjectLine') + ' '

    setTicketData()


}

function setTicketData() {
    ticketData = {
        url: location.href,
        issue: '',
        storeId: findTicketData('store'),
        workflow: findTicketData('workflow'),
        partner: findTicketData('customer'),
        playbook: '',
        reply: '',
    }
}

function addTemplateNote(){
    window.setTimeout( () => {
        let noteBox = document.querySelector('div.redactor_redactor.redactor_editor');
        noteBox.innerHTML = `
        <h2><b><u>Preface</u></b>:</h2>
        -<b>Reported Issue</b>:&nbsp;${ticketData.issue}<br>
        -<b>Store_ID</b>:&nbsp;${ticketData.storeId}<br>
        -<b>Workflow</b>:&nbsp;${ticketData.workflow}<br>
        <br>

        <hr>

        <h2><b><u>Investigation</u></b>:</h2>
        <h3>References:</h3>
        -<b>Playbook</b>:&nbsp;${ticketData.playbook}<br>
        -<b>Tickets</b>:&nbsp;<br>
        <h3>Queries & Observations</h3>
        -<b>Items</b>:&nbsp;<br>
        <ol>
            
        </ol>
        <br>

        <hr>

        <h2><b><u>Conclusion</u></b>:</h2>
        -<b>Summary of Observations</b>:
        -<b>Reply</b>:<br>
        ${ticketData.reply}
        `
    }, 10)
}

function createNote() {
    clearTicketData()
    setTicketData()
    // addTemplateNote()
}

function templateSelector() {
    let body = document.querySelector('body');
    setTimeout(() => {
        let noteBox = document.querySelector('div.redactor_redactor.redactor_editor');
        let notBoxRec = noteBox.getBoundingClientRect();
        body.innerHTML += `
            <div
                style="
                    position: fixed;
                    top: ${notBoxRec.top}px;
                    left: ${notBoxRec.left}px;
                    width: ${notBoxRec.width}px;
                    height: ${notBoxRec.height}px;
                    background-color: rgba(0, 0, 0, 0.5);
                    z-index: 10000;
                "
                class="tester-template-selector"
            >
            </div>
        `
        console.log(document.querySelector('.tester-template-selector'))
    }, 200)
}

function activateNoteTemplate() {
    window.setTimeout( () => {
        let noteBtn = document.querySelector('a#navNote');
        noteBtn.addEventListener('click', () => {
            templateSelector()
            // createNote()
        })

    }, 1800)
}