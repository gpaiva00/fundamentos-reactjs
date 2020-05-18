import React, { FC } from 'react';
import { FiShoppingCart, FiSmartphone, FiHome,  FiSquare, FiCircle } from 'react-icons/fi';
import { FaUtensils } from 'react-icons/fa';

interface CategoryProps {
  title: string
}

const CategoryIcon: FC<CategoryProps> = ({ title }) => {
  switch (title) {
    case 'Vendas':
    case 'Compras':
      return (<FiShoppingCart size={16} />)

    case 'Celular':
    case 'Tecnologia':
      return (<FiSmartphone size={16} />)

    case 'Casa':
      return (<FiHome  size={16} />)

    case 'Food':
    case 'Comida':
        return (<FaUtensils  size={16} />)

    default:
      return (<FiCircle size={16} />)
  }
}

export default CategoryIcon;
