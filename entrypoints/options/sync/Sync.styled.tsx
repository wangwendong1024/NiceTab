import styled, { css } from 'styled-components';
import { StyledEllipsis } from '~/entrypoints/common/style/Common.styled';

export const StyledSidebarWrapper = styled.div<{ $primaryColor?: string; $collapsed?: boolean; $sidebarWidth?: number;}>`
  position: relative;
  height: calc(100vh - 180px);

  .sidebar-inner-box {
    width: ${props => props.$sidebarWidth || 400}px;
    height: calc(100vh - 180px);
    position: fixed;
    top: 100px;
    transition: transform 0.2s ease-in-out;

    &.collapsed {
      .sidebar-inner-content {
        pointer-events: none;
        visibility: hidden;
        opacity: 0;
      }
      transform: translateX(-${props => props.$sidebarWidth || 400}px);
    }

    .sidebar-action-box {
      position: absolute;
      box-sizing: border-box;
      top: 0;
      right: -32px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: center;
      justify-content: center;
      visibility: visible;
    }
  }

  .sidebar-inner-content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-right: 10px;


  }
`;

export const StyledContainer = styled.div<{$collapsed?: boolean; $sidebarWidth?: number;}>`
  position: relative;
  width: 100%;
  min-height: 400px;
  display: grid;
  grid-template-columns: ${(props) => props.$collapsed ? '0px auto' : `${props.$sidebarWidth || 400}px auto` };
  transition: grid-template-columns 0.2s ease-in-out;

  .content {
    padding-left: 40px;
    border-left: 1px solid rgba(5, 5, 5, 0.06);
  }
`;

export const StyledLabel = styled.span`
  margin-right: 8px;
`;

export default {
  name: 'option-sync-styled',
}