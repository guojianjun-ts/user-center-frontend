import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
const Footer: React.FC = () => {
  const defaultMessage = 'BAZAHEY出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '编程导航',
          href: 'https://www.code-nav.cn',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/guojianjun-ts',
          blankTarget: true,
        },
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://zsxq.com/',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
