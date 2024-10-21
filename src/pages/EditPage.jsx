import React, { useState } from "react";

const EditPage = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1950;

  const [experienceYears, setExperienceYears] = useState({
    from: currentYear,
    to: currentYear
  });
  const [educationYears, setEducationYears] = useState({
    from: currentYear,
    to: currentYear
  });

  const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => currentYear - i);

  const InputField = ({ label, type = "text", ...props }) => (
    <label className="form-control w-full sm:max-w-xs">
      <span className="label label-text">{label}</span>
      <input type={type} className="input input-bordered w-full max-w-xs" {...props} />
    </label>
  );

  const YearSelect = ({ label, value, onChange }) => (
    <label className="form-control w-full sm:max-w-xs">
      <span className="label-text-alt">{label}</span>
      <select
        className="select select-bordered rounded-box bg-base-100 p-2 shadow"
        value={value}
        onChange={onChange}
      >
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <div className="container form-control h-full items-center justify-center pb-10">
      <form className="form-control gap-2 pt-10">
        <InputField label="Name" />
        <InputField label="Title" />
        <InputField label="Avatar" type="file" className="file-input file-input-bordered w-full max-w-xs" />
        <label className="form-control w-full max-w-xs">
          <span className="label label-text">Description</span>
          <textarea className="textarea textarea-bordered h-24"></textarea>
        </label>
        <InputField label="Phone Number" type="tel" />
        <InputField label="Email" type="email" />
        <InputField label="Location" />
        <InputField label="Language" />

        {/* Expertise Section */}
        <div className="form-control w-full max-w-xs">
          <span className="label label-text">Expertise</span>
          <InputField />
          <button className="btn btn-outline btn-neutral btn-sm self-end mt-2">Add More</button>
        </div>

        {/* Experience Section */}
        <div className="form-control">
          <span className="label label-text">Experience</span>
          <div className="flex flex-wrap gap-4">
            <InputField placeholder="Company" />
            <InputField placeholder="City" />
            <InputField placeholder="Country" />
          </div>
          <div className="flex gap-7 p-5">
            <YearSelect 
              label="From" 
              value={experienceYears.from}
              onChange={(e) => setExperienceYears(prev => ({ ...prev, from: parseInt(e.target.value) }))}
            />
            <YearSelect 
              label="To" 
              value={experienceYears.to}
              onChange={(e) => setExperienceYears(prev => ({ ...prev, to: parseInt(e.target.value) }))}
            />
          </div>
          <button className="btn btn-outline btn-neutral btn-sm self-end">Add More</button>
        </div>

        {/* Education Section */}
        <div className="form-control">
          <span className="label label-text">Education</span>
          <div className="flex flex-wrap gap-4">
            <InputField placeholder="University" />
            <InputField placeholder="Career" />
          </div>
          <div className="flex gap-7 p-5">
          <YearSelect 
              label="From" 
              value={educationYears.from}
              onChange={(e) => setEducationYears(prev => ({ ...prev, from: parseInt(e.target.value) }))}
            />
            <YearSelect 
              label="To" 
              value={educationYears.to}
              onChange={(e) => setEducationYears(prev => ({ ...prev, to: parseInt(e.target.value) }))}
            />
          </div>
          <button className="btn btn-outline btn-neutral btn-sm self-end">Add More</button>
        </div>

        {/* Skills Summary Section */}
        <div className="form-control w-full max-w-xs mb-10">
          <span className="label label-text">Skills Summary</span>
          <InputField />
          <button className="btn btn-outline btn-neutral btn-sm self-end mt-2">Add More</button>
        </div>
      </form>
      <button className="btn btn-accent btn-md btn-wide">Save</button>
    </div>
  );
};

export default EditPage;