/**
 * Created by charnjeetelectrovese@gmail.com on 2/7/2020.
 */

import React, {Component, useMemo} from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

// import DateFnsUtils from "@date-io/date-fns";

const CustomDateTimePicker = ({onChange, minDate, isError, maxDate, value, label, clearable, helperText}) => {
    const handleOnChange = (e, d) => {
        // const tempDate  = new Date(e);
        // const formattedDate = tempDate.getDate() + "-" + (tempDate.getMonth() + 1) + "-" + tempDate.getFullYear();
        // console.log(formattedDate);

        onChange && onChange(e);
    }

    const mD = useMemo(() => {
        const d = new Date();
        d?.setFullYear(d.getFullYear() + 10);
        return maxDate ? maxDate : d;
    }, [maxDate]);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
             helperText={ helperText}
                clearable
                margin="dense"
                variant="inline"
                id="time-picker"
                fullWidth
                label={label}
                value={value ? value : (null)}
                onChange={handleOnChange}
                inputVariant={'outlined'}
                format={
                    "dd-MM-yyyy HH:mm"
                }
                error={isError ? true : false}
                minDate={minDate}
                maxDate={mD}
                showTodayButton
                // KeyboardButtonProps={{
                //     'aria-label': 'change time',
                // }}
            />
        </LocalizationProvider>
    );
}

export default CustomDateTimePicker;
