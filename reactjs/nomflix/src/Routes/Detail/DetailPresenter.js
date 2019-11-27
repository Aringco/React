import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const DetailPresetner = ({result, loading, error}) => null;

DetailPresetner.propTypes = {
    result: PropTypes.object,
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired
}

export default DetailPresetner;