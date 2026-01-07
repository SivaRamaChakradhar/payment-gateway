const router = require("express").Router();
const pool = require("../config/db");

router.get("/merchant", async (req, res) => {
  const result = await pool.query(
    "SELECT id, email, api_key FROM merchants WHERE email=$1",
    ["test@example.com"]
  );

  if (result.rowCount === 0) {
    return res.status(404).json({ seeded: false });
  }

  return res.json({
    ...result.rows[0],
    seeded: true
  });
});

module.exports = router;
