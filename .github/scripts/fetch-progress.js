// gets the status of projects from the releases, issues, and pull requests
module.exports = async ({github, context, core}) => {
  const release = process.env.RELEASE_TAG;
  const major = parseInt(process.env.VERSION_MAJOR);
  const minor = parseInt(process.env.VERSION_MINOR);
  const patch = parseInt(process.env.VERSION_PATCH);

  core.info(`Release: ${release}, Project: ${major}, Review: ${minor}, Patch: ${patch}`);
};