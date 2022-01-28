module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '02d769417258b2fa12cc1777d201f0a4'),
  },
});
