module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f03a9854a48161e5df33032499305919'),
  },
});
