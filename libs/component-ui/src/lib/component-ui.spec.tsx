import { render } from '@testing-library/react';

import ComponentUi from './component-ui';

describe('ComponentUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentUi />);
    expect(baseElement).toBeTruthy();
  });
});
