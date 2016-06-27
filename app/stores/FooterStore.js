import alt from '../alt';
import FooterActions from '../actions/FooterActions';

class FooterStore {
    constructor() {
        this.bindActions(FooterActions);
        this.characters = [];
    }

    onGetTopCharactersSuccess(data) {
        this.characters = data.splice(0,5);
    }

    onGetTopCharactersFail(jqXhr) {
        toastr.error(jqXhr.responseJSON && jqXhr)
    }
}

export default alt.createStore(FooterStore);