interface ILocationPayload {
  label: string;
  id: number;
  is_area: boolean;
  is_remote: boolean;
  locations: Array<ILocationPayload>;
}

interface ILoader {
  isLoading: boolean;
}

interface ILocationProps extends ILocationPayload {
  isExpandDefault?: boolean;
}
