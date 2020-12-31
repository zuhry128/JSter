import DataSource from '../data/data-source.js';
import '../components/SearchButton.js';
import '../components/ClubList.js';

const main = () => {
    const searchElement = document.querySelector("search-button");
    const clubListElement = document.querySelector("side-list");

    const onButtonSearchClicked = () => {
        DataSource.SearchArm(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        clubListElement.clubs = results;
    };

    const fallbackResult = (message) => {
        clubListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;