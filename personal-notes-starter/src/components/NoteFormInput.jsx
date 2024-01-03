import React from "react";

class NoteFormInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            limit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.limit),
            }
        })
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        })
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addDatas(this.state);
        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        })
    }

    render() {
        return(
            <form onSubmit={this.onSubmitEventHandler} className="note-input">
                <div>
                    <div className="note-input__title">
                        <label htmlFor="title">
                            Judul: <span className="note-input__title__char-limit">{this.state.limit - this.state.title.length} sisa karakter</span>                            
                        </label>
                        <input type="title" id="title" value={this.state.title} onChange={this.onTitleChangeEventHandler} placeholder="Tuliskan Judul..." required='' />
                    </div>
                    <div className="note-input__body">
                        <label htmlFor="message">
                            Catatan
                        </label>
                        <textarea id="message" rows="4" value={this.state.body} onChange={this.onBodyChangeEventHandler} placeholder="Tuliskan Catatan..." required=''></textarea>
                    </div>
                    <button type="submit">Tambahkan</button>
                </div>
            </form>
        );
    }
}

export default NoteFormInput;