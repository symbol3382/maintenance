import {Typography} from "@mui/material";
import EngineeringIcon from "@mui/icons-material/Engineering";

const MaintenanceLogo = () => {
    return <>
        <Typography variant={"h1"} sx={{fontSize: {xs: "5rem", sm: "10rem", md: "15rem"}}}>
            <EngineeringIcon fontSize={"inherit"}/>
        </Typography>
        <Typography variant="h3" sx={{fontSize: {xs: "1.4rem", sm: "3rem"}}}>
            Under Maintenance
        </Typography>
    </>
}

export default MaintenanceLogo;