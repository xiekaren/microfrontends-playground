import * as express from "express";
import * as path from "path";
const app = express();

app.use(express.static('public'));

app.get(["/", "/sell"], (req, res) => {
    console.log(req.path);
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(8080, () => {
    console.log("Listening on port 8080");
});
