import {colors} from '../../theme/colors';
import {typography} from '../../theme/typography';

const BASE = {
  fontFamily: typography.regular,
  fontSize: 14,
  color: colors.primary,
};
const BASE_BOLD = {
  fontFamily: typography.semiBold,
  fontSize: 16,
  color: colors.primary,
};
const BOLD = {
  fontFamily: typography.bold,
  color: colors.primary,
};

export const presets = {
  default: BASE,
  bold: BOLD,
  h1: {
    ...BOLD,
    fontSize: 18,
  },
  h2: {
    ...BASE_BOLD,
  },
  small: {
    ...BASE,
    fontSize: 14,
    color: colors.grey,
  },
};
