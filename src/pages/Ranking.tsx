import PageBreadcrumb from "../components/common/PageBreadCrumb";
import ComponentCard from "../components/common/ComponentCard";
import BarChartOne from "../components/charts/bar/BarChartOne";
import PageMeta from "../components/common/PageMeta";
import { teams } from "../data/Teams";

export default function BarChart() {
  return (
    <div>
      <PageMeta
        title="Demo | Template | Testing"
        description="This is a demo page for testing purposes."
      />
      <PageBreadcrumb pageTitle="Bar Chart" />
      <div className="space-y-6">
        <ComponentCard title="Bar Chart 1">
          <BarChartOne />
        </ComponentCard>
      </div>
    </div>
  );
}
