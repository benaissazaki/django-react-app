import React from "react";
import { CircularProgress } from "@material-ui/core";
import "./Loading.css";

export const Loading = () => {
    return (
        <div id="loading">
            <CircularProgress />
        </div>
    )
}