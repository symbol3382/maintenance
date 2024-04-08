import {Grid, Link, Typography} from "@mui/material";

const Wordle = () => {

    const word = [
        {w: 'W', bg: "#2D2D2D"},
        {w: 'O', bg: "green"},
        {w: 'R', bg: "#b7950b"},
        {w: 'D', bg: "#2D2D2D"},
        {w: 'L', bg: "#2D2D2D"},
        {w: 'E', bg: "#2D2D2D"},
    ];
    const tileSize = "35px";

    return <Link href={"https://wordle.gouravverma.in"} underline={"hover"} color={"inherit"}>
        <Grid container justifyContent={"center"}>
            <Grid item sx={{textAlign: "center"}} xs={12} sm={"auto"}>
                <Typography component={"p"} variant={"h6"} sx={{marginRight: "10px", fontWeight: "400", fontSize: {xs:"0.9rem", sm: "1.1rem"}, lineHeight: tileSize}}>
                    Why not take a break and play wordle?
                </Typography>
            </Grid>
            {
                word.map(w => {
                    return <Grid item sx={{marginRight: "3px"}}>
                        <Typography
                            sx={{
                                background: w.bg,
                                width: tileSize,
                                height: tileSize,
                                lineHeight: tileSize,
                                textAlign: "center",
                                borderRadius: "5px"
                            }}
                        >
                            {w.w}
                        </Typography>
                    </Grid>
                })
            }
        </Grid>
    </Link>
}

export default Wordle;