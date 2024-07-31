import React, { useMemo } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { TimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useTheme } from "@mui/styles";

const CustomTimePicker = ({
  onChange,
  minDate,
  isError,
  maxDate,
  value,
  label,
  clearable,
  helperText,
}) => {
  const theme = useTheme();
  const handleOnChange = (e, d) => {
    onChange && onChange(e?.format());
  };

  const mD = useMemo(() => {
    const d = new Date();
    d.setFullYear(d.getFullYear() + 10);
    return maxDate ? maxDate : d;
  }, [maxDate]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimePicker
        helperText={helperText}
        clearable
        margin="dense"
        variant="inline"
        id="time-picker"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: isError ? theme.palette.error.main : "",
          },

          "& .MuiInputLabel-root": {
            color: theme.palette.text.primary,
            marginTop: theme.spacing(-0.5),
          },
          "& .MuiInputLabel-shrink": {
            marginTop: theme.spacing(0.05),
          },
          width: 1,
        }}
        // style={{ textAlign: 'center' }}
        label={label}
        value={value ? dayjs(value) : null}
        onChange={handleOnChange}
        inputVariant={"outlined"}
        error={isError ? true : false}
        minDate={minDate && dayjs(minDate)}
        maxDate={mD ? dayjs(mD) : dayjs()}
        showTodayButton
        // KeyboardButtonProps={{
        //     'aria-label': 'change time',
        // }}
      />
    </LocalizationProvider>
  );
};

export default CustomTimePicker;