import './App.css';
import {Box, Divider, Grid} from "@mui/material";
import MaintenanceLogo from "./components/maintenanceLogo";
import Wordle from "./components/wordle";
import Spent from "./components/spent";

function App() {

    return <>
        {/*<div className={"sss"}>*/}
        {/*    <Box component="div" sx={{ display: { xs: 'block', sm: 'none' } }}>xs</Box>*/}
        {/*    <Box component="div" sx={{ display: { xs: 'none', sm: 'block', md: 'none' } }}>sm</Box>*/}
        {/*    <Box component="div" sx={{ display: { xs: 'none', md: 'block', lg: 'none' } }}>md</Box>*/}
        {/*    <Box component="div" sx={{ display: { xs: 'none', lg: 'block', xl: 'none' } }}>lg</Box>*/}
        {/*    <Box component="div" sx={{ display: { xs: 'none', xl: 'block' } }}>xl</Box>*/}
        {/*</div>*/}
        <Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}
              sx={{width: "100vw", height: "100vh", background: "black"}}>
            <Grid item container justifyContent={"center"} alignItems={"center"}>
                <MaintenanceLogo/>
            </Grid>
            <Grid item width={"100%"}>
                <Wordle/>
            </Grid>
            <Grid item sx={{color: "white", textAlign: "center"}}>
                <Divider orientation={"horizontal"} sx={{margin: 1}} flexItem/>
                <Spent/>
            </Grid>
        </Grid>
    </>;
}

export default App;
