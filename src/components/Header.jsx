import styled from "styled-components";

const Header = ({ className }) => {
    return (
        <header className={className}>
            <div>Where in the world?</div>
            <div>Dark Mode</div>
        </header>
    );
};

export default styled(Header)`
    background-color: #2b3743;
`;
