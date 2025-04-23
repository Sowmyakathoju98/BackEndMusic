
export const signIn = (req, res, next) => {
    try {
        //console.log(req.body);
        const query = `INSERT INTO practice.userdetails(EMAIL_ID,FIRST_NAME,LAST_NAME,PASSWORD,IMAGE,SIGN_IN) VALUES ('${req.body.email}','${req.body.firstName}','${req.body.lastName}','${req.body.password}','',0)`;
        console.log(query);
        //res.send(req.body.email);

        con.query(query);
        console.log(query);

        res.send(req.body.email);
    }
    catch (e) {
        console.log(e);

    }
}