export const UserInfo = ({ user }) => (
  <a className="UserInfo" href={user.email}>
    {user ? user.name : null}
  </a>
);
