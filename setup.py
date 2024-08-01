from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in icici_bank_integration/__init__.py
from icici_bank_integration import __version__ as version

setup(
	name="icici_bank_integration",
	version=version,
	description="ICICI Bank Integration",
	author="Tridotstech PVT LTD",
	author_email="info@tridotstech.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
