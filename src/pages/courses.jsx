import { httpInterceptedService } from "../core/http-service";
import CourseList from "../features/courses/components/cours-list";

const Cources = () => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="d-flex align-items-center justify-content-between mb-5">
          <a className="btn btn-primary fw-bolder mt-n1">New Product</a>
        </div>
        <CourseList />
      </div>
    </div>
  );
};

export async function coursesLoader() {
  const response = await httpInterceptedService.get("/Course/list");
  return response.data;
}
export default Cources;
