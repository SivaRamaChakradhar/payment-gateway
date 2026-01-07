const pool = require("../config/db");

async function seedTestMerchant() {
  const merchant = {
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Test Merchant",
    email: "test@example.com",
    api_key: "key_test_abc123",
    api_secret: "secret_test_xyz789"
  };

  await pool.query(
    `INSERT INTO merchants (id, name, email, api_key, api_secret)
     VALUES ($1,$2,$3,$4,$5)
     ON CONFLICT (email) DO NOTHING`,
    [
      merchant.id,
      merchant.name,
      merchant.email,
      merchant.api_key,
      merchant.api_secret
    ]
  );
}

module.exports = seedTestMerchant;
