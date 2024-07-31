import Constants from "../../config/constants";
import classNames from "classnames";
import React, {useEffect, useMemo} from "react";
import {useTheme} from "@mui/styles";
import {alpha} from "@mui/material/styles";


const StatusPill = ({color, status}) => {
    const theme = useTheme();
    const colorCode = useMemo(() => {
        return ['high', 'medium', 'low','active', 'business', "Discuss", "inactive", "service", "warm", "draft", "proposal", "ACTIVE", "new"].indexOf(color) >= 0 ? color: 'high';
    }, [color]);

    return (
        <span className={classNames('status')} style={{
            ...theme.typography.caption,
            color: theme.palette.status[colorCode],
            background: alpha(theme.palette.status[colorCode], 0.2) }}>
        {(status)}
    </span>);
};

export default StatusPill;
