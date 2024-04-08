import {Button, Grid, Link, Typography} from "@mui/material";
import SpentLogo from "./spent-logo";

const Spent = () => {
    return <Link href={"https://spent.gouravverma.in"} underline={"hover"} color={"inherit"} variant={"contained"}>
        <Grid container justifyContent={"center"}>
            <Typography component={"p"} variant={"h6"}
                        sx={{marginRight: "10px", fontWeight: "400", fontSize: {xs: "0.9rem", sm: "1.1rem"}}}>
                Alternatively, explore my Spent Analyzer app while i spruce things up.
            </Typography>
            <Grid item>
                <Button variant={"contained"} color={"inherit"} size={"small"}>
                    <Typography>Spent Analyzer &nbsp;  </Typography> <SpentLogo />
                </Button>
            </Grid>
        </Grid>
    </Link>
}

export default Spent;