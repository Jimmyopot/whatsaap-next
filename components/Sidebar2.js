import styled from 'styled-components';
import styles from '../styles/Home.module.css'
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { Button } from '@material-ui/core';
import * as EmailValidator from "email-validator";

function Sidebar() {

    const createChat = () => {
        const input = prompt(
            "Please enter an email address for the user you want to chat with"
        );

        if (!input) return null;

        if (EmailValidator.validate(input)) {
            // add chat into the DB chats collection
        }
    }

    return (
        <div className="container">
            <div className={styles.header}>
                <div className={styles.avatar}>
                    <Avatar />
                </div>

                <div className="iconsContainer">
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>

            </div>

            <div className={styles.search}>
                <SearchIcon />
                <div>
                    <input 
                        className={styles.searchInput} 
                        placeholder="Search chats..."
                    />
                </div>
            </div>

            <div className="">
                <button 
                    className={styles.searchButton}
                    onClick={createChat}
                >Start a new chat
                </button>
            </div>
        </div>
        
    )
}

export default Sidebar;


