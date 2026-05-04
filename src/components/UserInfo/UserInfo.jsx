export const UserInfo = ({ user }) => (
  <a className="UserInfo" href="mailto:Sincere@april.biz">
    {user ? user.name : null}
  </a>
);
