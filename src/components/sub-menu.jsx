import SubItem from './sub-item';

const SubMenu = ({item}) => {
  return (
    <ul className="main-list__sub-list sub-list">
      {item.map((item) => <SubItem key={item.id} item={item} />)}
    </ul>
  )
}

export default SubMenu;