import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useAuthDialogActions, useAccountDialogActions } from "../actions";
import { useSelector } from "react-redux";
import { RootState } from "../reducers";
import appBarIcon from "../images/appBarIcon.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
  })
);

export default function SchedulerAppBar() {
  const classes = useStyles();

  const isSignedin = useSelector((state: RootState) => state.app.isSignedin);
  const { openAuthDialog } = useAuthDialogActions();
  const { openAccountDialog } = useAccountDialogActions();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <img alt="appBarIcon" src={appBarIcon} className={classes.icon} />
          <Typography variant="h6" className={classes.title}>
            Lite Scheduler
          </Typography>
          {isSignedin ? (
            <Button color="inherit" onClick={openAccountDialog}>
              User Account
            </Button>
          ) : (
            <Button color="inherit" onClick={openAuthDialog}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
