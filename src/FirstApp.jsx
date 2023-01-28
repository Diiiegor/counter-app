import PropTypes from "prop-types";

export const FirstApp = ({title, subtitle,name}) => {
    return (
        <>
            <h1>{title}</h1>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    );
}
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number.isRequired,
}

FirstApp.defaultProps = {
    title: "This is a default title",
    subtitle: 2023,
    name: "Juan Diego oliveros",
}