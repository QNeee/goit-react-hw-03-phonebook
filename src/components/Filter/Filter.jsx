import PropTypes from "prop-types";
import { Container, FilterText, FilterInput } from "./Filter.styled";
export const Filter = ({ value, change }) => {
    return (<Container>
        <FilterText>Find contact</FilterText>
        <FilterInput value={value} onChange={(e) => change(e.target.value)}></FilterInput>
    </Container>)
}

Filter.propTypes = {
    value: PropTypes.string,
    change: PropTypes.func
}