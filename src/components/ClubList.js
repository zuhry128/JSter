import './ClubItem.js';
class CLubList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set _sidearms(sidearm) {
        this._sidearms = sidearm;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        .placeholder {
            font-weight: lighter;
            color: rgba(0,0,0,0.5);
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
        }
        </style>
        `;

        this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }

    render() {
        this.shadowDOM.innerHTML = "";
        this._sidearms.forEach(sidearm => {
            const armItemElement = document.querySelector("sidearm-item");
            armItemElement.sidearm = sidearm
            this.shadowDOM.appendChild(armItemElement);
        });
    }
}

customElements.define("side-list", CLubList);