function createNoteForm() {
    let noteFormPopup = document.createElement('div');
    noteFormPopup.id = 'note-form-popup';
    console.log('Note form!');
    noteFormPopup.innerHTML = `
        <div class="note-form-inner">
            <h2>Custom Triage Form</h2>
            <hr>
            <form>
                <label for="issue-type">Issue Type:</label>
                <select>
                    <option>Type 1</option>
                    <option>Option 2</option>
                    <option>Type 3</option>
                    <option>Option 4</option>
                    <option>Type 5</option>
                    <option>Option 6</option>
                </select>
            <form>

        </div>
    `
    document.querySelector('body').appendChild(noteFormPopup)
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
            // templateSelector()
            createNoteForm()
            // createNote()
        })

    }, 500)
}