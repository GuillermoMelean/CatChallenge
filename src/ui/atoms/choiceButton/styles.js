import styled from 'styled-components/native';

const colors = {
    accent: '#fff',
    highlight: '#D22',
    contrast: '#FFF',
}

export const ButtonContainer = styled.TouchableHighlight`
    background-color: ${props => props.outline ? colors.contrast : colors.accent};
    width: 50px;
    height: 50px;
    border-color: ${colors.accent};
    border-width: 2px;
    shadow-color: #000;
    shadow-offset: 0 4px; 
    shadow-opacity: 0.1;
    shadow-radius: 2px;
    border-radius: 50px;
    justify-content: center;
    align-items: center;
`