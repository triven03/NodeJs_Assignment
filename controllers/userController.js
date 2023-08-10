let con = require("../database/init")


const showStatus = async function(req,res){
    let uid=req.body.uid;
console.log(uid);
    let q =`SELECT
            user.Uid,
            user.name,
            candidate.candidateName,
            candidate_status.status
        FROM user
            JOIN candidate
            ON user.Uid = candidate.Uid
            JOIN candidate_status
            ON candidate_status.cid = candidate.cid
        where  user.Uid=${uid}`

    con.query(q, function (err, result) {
        if (err) throw err;
        console.log(result);
        let join=0;
        let inter=0;
        let total = result.length;
        result.forEach((e)=>{
            if (e.status=="joined") {
                join++;
            } else if(e.status=="interview") {
                inter++;
            }
        })
        let ans={
            Uid:uid,
            TotalCandidates:total,
            Joined:join,
            Interview:inter
        }
        res.send(ans);
      });
}

// const showStatus = async function(req,res){
//     let uid=req.body.uid;
//     // console.log(req);
//   console.log(uid);  
//         res.send(String(uid));
     
// }


module.exports={
    showStatus
} 