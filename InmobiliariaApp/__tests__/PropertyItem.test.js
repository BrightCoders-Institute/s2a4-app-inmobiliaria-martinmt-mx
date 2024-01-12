import React from 'react';
import {render} from '@testing-library/react-native'
import PropertyItem from '../src/components/PropertyItem';

describe('PropertyItem', () => {
  it('renders correctly', () => {
    const property = {
      id: 1,
      name: 'Casa de Prueba',
      address: 'Calle de Prueba #123',
      bedrooms: 3,
      bathrooms: 2,
      area: '200',
      rent: '$1000',
      image: 'https://example.com/image1.jpg',
      rating: 4,
    };

    const { toJSON } = render(<PropertyItem property={property} />);

    expect(toJSON()).toMatchSnapshot();
  });
});
